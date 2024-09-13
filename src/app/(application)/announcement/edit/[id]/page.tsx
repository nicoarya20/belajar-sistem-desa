import ViewEditAnnouncement from "@/module/announcement/view/view_edit_announcement";


function Page({ params }: { params: { id: string } }) {
  return (
    <ViewEditAnnouncement data={params.id}/>
  )
}
export default Page;