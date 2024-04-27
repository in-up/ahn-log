import { useRouter } from "next/router"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import { DEFAULT_CATEGORY } from "src/constants"
import styled from "@emotion/styled"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"

type Props = {}

const Category: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()

  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    })
  }

  return (
    <StyledWrapper>
      <div className="top">
        <i className="ri-folder-open-line"></i> Category
      </div>
      <div className="content">
        {Object.keys(data).map((key, idx) => (
          <div
            className={`item${key === currentCategory ? " active" : ""}`}
            key={idx}
            onClick={() => handleOptionClick(key)}
          >
            {`${key} (${data[key]})`}
          </div>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default Category

const StyledWrapper = styled.div`
width: 100%;
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray9};
    @media (min-width: 1024px) {
      display: block;
    }
    > i {
    font-size: 16px;
    margin-right: 0.25rem;
  }
  }
  position: relative;
  > .wrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
  > .content {
    margin-top: 0.25rem;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.1rem;
    .item {
      padding: 0.5rem;
      margin: 0;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &.active {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }
  }
`
