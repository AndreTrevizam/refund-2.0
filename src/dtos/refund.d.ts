type RefundAPIResponse = {
  id: string
  userId: string
  name: string
  category: CategoriesAPIEnum
  amount: number
  filename: string
  user: {
    name: string
  }
}

type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[],
  pagination: {
    page: number
    totalPages: number
    perPage: number
    totalRecords: number
  }
}