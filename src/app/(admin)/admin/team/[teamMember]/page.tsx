import { getTeamMember } from "@/data-access/team-members";
import EditTeamMemberForm from "../edit-member-form";

export default function EditTeamMember({
  params,
}: {
  params: { teamMember: string };
}) {

  const member = getTeamMember(params.teamMember);

  return (
    <div>
      <EditTeamMemberForm />
    </div>
  );
}
