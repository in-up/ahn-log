import { TCategories } from "src/types"
import React from "react"
import CategoryList from "./CategoryList"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"

type Props = {}

const CategoryCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <CategoryList />
      {/* <OrderButtons /> */}
    </StyledWrapper>
  )
}

export default CategoryCard

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  justify-content: space-between;
  align-items: center;
`
