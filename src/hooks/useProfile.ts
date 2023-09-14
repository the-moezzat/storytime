import { useToast } from "@/components/ui/use-toast";
import { getUserProfile, updateUsedCredit } from "@/services/userApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useUser from "./useUser";

export default function useProfile() {
  const queryClient = useQueryClient();
  const user = useUser();

  const { toast } = useToast();
  const { data: profile } = useQuery(["profile"], {
    queryFn: () => getUserProfile(user.id),
    staleTime: 0,
  });

  const { mutate: updateCredit } = useMutation({
    mutationFn: () =>
      updateUsedCredit({
        user_id: profile?.id as string,
        used_credit: (profile?.used_credit as number) + 1,
      }),
    onSuccess() {
      queryClient.invalidateQueries(["profile"]).catch(console.error);
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
