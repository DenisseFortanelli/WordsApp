import { useQuery } from "react-query";
import { getCategory } from "../api/MicroServiceTwo";

export function getCategoryData(){
 return useQuery('categories',getCategory,{

 });
}