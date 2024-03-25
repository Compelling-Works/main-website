"use server";

import { db } from "@/database/index";
import {
  donors,
  partners,
  projects,
  teamMembers,
  users,
} from "@/database/schema";

export default async function getStatistics() {
  const _projects = (await db.select().from(projects)).length;
  const _users = (await db.select().from(users)).length;
  const _teamMembers = (await db.select().from(teamMembers)).length;
  const _partners = (await db.select().from(partners)).length;
  const _donors = (await db.select().from(donors)).length;

  const data = [
    { name: "Projects", data: _projects },
    { name: "Users", data: _users },
    { name: "Team members", data: _teamMembers },
    { name: "Partners", data: _partners },
    { name: "Donors", data: _donors },
  ];

  return data;
}
