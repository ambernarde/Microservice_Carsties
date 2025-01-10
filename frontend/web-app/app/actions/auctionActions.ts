'use server';
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
  const res = await fetch('htpp://localhost:6001/auctions', {
    method:'PUT',
    headers:{}, 
    body : JSON.stringify(data)
   });

   if (!res.ok) return {status: res.status,message: res.statusText}
   return res.json();  
} catch (error) {
  console.error('Error updating auction:', error);
  return {status:500,message:'Fetch failed',error};
}

 
}
