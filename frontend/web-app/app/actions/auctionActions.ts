'use server';
import { auth } from "@/auth";
import { Auction, PagedResult } from "@/types";



export async function getData(query : string) : Promise<PagedResult<Auction>>{
  const res = await fetch(`http://localhost:6001/search${query}`);
  if(!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}


export async function updateAuctionTest() {
  const data = {
      mileage: Math.floor(Math.random() * 10000) + 1
  }
try {

  const session = await auth();

  const res = await fetch('http://localhost:6001/auctions/2baa2d43-77d7-4e28-894d-74f685c3121c', {
    method:'PUT',
    headers:{
      'Content-type' : 'application/json',
      'Authorization' : 'Bearer ' + session?.accessToken
    }, 
    body : JSON.stringify(data)
   });

   if (!res.ok) return {status: res.status,message: res.statusText}
   return res.statusText;  
} catch (error) {
  console.error('Error updating auction:', error);
  return {status:500,message:'Fetch failed',error};
}

 
}
