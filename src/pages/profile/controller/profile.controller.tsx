import { useCallback, useMemo } from "react";
import { useAppNavigation } from "../../../hooks/use-app-navigation";
import { useUpdateForm } from "../hooks/use-update-form";
import type { FormData } from "../hooks/use-update-form/schema";
import { Profile } from "../view/profile.view";
import { usePersonalInfo } from "../../../hooks/use-personal-info";

export default function ProfileController() {
  const { redirect } = useAppNavigation();
  const { data: personalInfo } = usePersonalInfo();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useUpdateForm({ ...personalInfo! });

  const values = watch();

  const hasValues = useMemo(() => {
    const nameChanged = values.name !== personalInfo?.name;
    const emailChanged = values.email !== personalInfo?.email;
    const result = nameChanged || emailChanged;
    return result;
  }, [values.name, values.email, personalInfo?.name, personalInfo?.email]);

  const handleUpdate = useCallback((data: FormData) => {
    console.log("Updating profile with data:", data);
  }, []);

  return (
    <Profile
      user={personalInfo!}
      errors={errors}
      onSubmit={handleSubmit(handleUpdate)}
      redirect={redirect}
      setValue={setValue}
      hasValues={hasValues}
    />
  );
}
