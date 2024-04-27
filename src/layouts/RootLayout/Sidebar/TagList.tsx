import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">
      <i className="ri-price-tag-3-line"></i> Tags
      </div>
      <div className="list">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
          >
          {key}
          </a>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  margin: 1rem 0;

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

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.1rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.5rem;
      margin: 0;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray12};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }
    }
  }
`
