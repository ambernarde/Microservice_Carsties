export type PagedResult<T> = {
  results: T[]
  pageCount: number
  totalCount: number
}
export interface Auction {
  reservePrice: number
  seller: string
  winner?: string
  soldAmount: number
  currentHighBid: number
  createAt: string
  updateAt: string
  auctionEnd: string
  status: string
  make: string
  model: string
  year: number
  color: string
  mileage: number
  imageUrl: string
  id: string
}
