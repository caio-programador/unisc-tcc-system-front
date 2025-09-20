import { useForm } from "react-hook-form";
import { filterDateFormSchema, type FilterDateFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const currentDate = new Date();
export const useFilterDateForm = () => {
  return useForm<FilterDateFormData>({
    resolver: zodResolver(filterDateFormSchema),
    defaultValues: {
      startDate: currentDate,
      endDate: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
    },
  });
};
