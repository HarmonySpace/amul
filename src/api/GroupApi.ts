import axios from "./axios"
import { AxiosResponse } from "axios"
import { Group } from "../interfaces/Group"

//gets
export const getGroups = async (): Promise<AxiosResponse<Group[]>> => await axios.get("/groups");
export const getGroup = async (id: string): Promise<AxiosResponse<Group>> => await axios.get("/groups/id/" + id);
//post
export const addGroup = async (group: Group): Promise<AxiosResponse<Group>> => await axios.post("/groups", group);
//put
export const putGroup = async (id: string, group: Group): Promise<AxiosResponse<Group>> => await axios.post("/groups/id/" + id, group);
//delete
export const deleteGroup = async (id: string): Promise<AxiosResponse<Group>> => await axios.delete("/groups/id/" + id);