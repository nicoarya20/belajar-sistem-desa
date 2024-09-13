import ViewDetailAnnouncement from "@/module/announcement/view/view_detail_announcement";

function Page({ params }: { params: { id: string } }) {
   return(
      <ViewDetailAnnouncement data={params.id}  />
   )
}
export default Page;