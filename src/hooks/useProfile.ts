import { useToast } from "@/components/ui/use-toast";
import { getUserProfile, updateUsedCredit } from "@/services/userApi";
import { useMutation, useQuery } from "react-query";
import useUser from "./useUser";

export default function useProfile() {
  const user = useUser();

  const { toast } = useToast();
  const { data: profile } = useQuery(["profile"], {
    queryFn: () => getUserProfile(user.id),
    staleTime: Infinity,
  });

  const { mutate: updateCredit } = useMutation({
    mutationFn: updateUsedCredit,
    onSuccess(data) {
      console.log(data);
    },
    onError() {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    },
  });

  return { profile, updateCredit, user };
}
