import { useForm } from "react-hook-form";
import { filterDateFomSchema, type FilterDateFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const currentDate = new Date();
export const useFilterDateForm = () => {
  return useForm<FilterDateFormData>({
    resolver: zodResolver(filterDateFomSchema),
    defaultValues: {
      startDate: currentDate,
      endDate: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
    },
  });
};
