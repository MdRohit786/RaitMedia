
import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';


const useFollow = () => {
  const queryClient = useQueryClient();

  const {mutate:follow, isPending} = useMutation({
    mutationFn : async(userId) =>{
       try {
         const res = await fetch(`/api/users/follow/${userId}`,{
            method : 'POST',
        });
        const data = await res.json();
        if(!res.ok){
            throw new Error(data.message || "somthing is wrong");
        }
        return data;
       } catch (error) {
        throw new Error(error.message || "Failed to follow user", { cause: error });

       }
    },
    onSuccess: async (data) => {
        await Promise.all([
          queryClient.invalidateQueries({queryKey:['suggestedUsers']}),
          queryClient.invalidateQueries({queryKey:['authUser']}),
          queryClient.invalidateQueries({queryKey:['userProfile']})
        ]);

        toast.success(data?.message || "Follow status updated");
    },
    onError:(error) =>{
      toast.error(error.message)
    }
  });
  return {follow, isPending};
};

export default useFollow
