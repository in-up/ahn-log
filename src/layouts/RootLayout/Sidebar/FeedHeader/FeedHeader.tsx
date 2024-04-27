import { TCategories } from "src/types"
import React from "react"
import CategoryList from "./CategoryList"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <CategoryList />
      {/* <OrderButtons /> */}
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
`
