import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "./schema";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
    return useForm<FormData>({
        resolver: zodResolver(formSchema),
    })
};
