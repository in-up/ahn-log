import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"
import Image from "next/image"
import Category from "../../../components/Category"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <StyledWrapper href={`/${data.slug}`}>
      <article>
        <div className={`thumbnail ${data.thumbnail ? "" : "no-thumbnail"}`}>
          {data.thumbnail && (
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              css={{
                objectFit: "cover",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          )}
          {!data.thumbnail && (
            <Image
              src="/avatar.png"
              fill
              alt={data.title}
              css={{
                objectFit: "cover",
                maxWidth: "100%",
                height: "auto",
                filter: "blur(10px)",
              }}
            />
          )}
        </div>
        <div className="content">
          <header className="top">
            <div className="category">
              {category && <Category>{category}</Category>}
            </div>
            <h2>{data.title}</h2>
          </header>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="date">
            <div className="content">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="tags">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled(Link)`
  article {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 1.5rem 0;
    /* background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4}; */
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};

    @media (max-width: 1024px) {
      flex-direction: column; /* 모바일 화면에서 상하로 배치 */
    }
    /* transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; */
    /* :hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    } */
    > .thumbnail {
      position: relative;
      width: 328px;
      height: 220px;
      flex-shrink: 0;
      border-radius: 1rem;
      overflow: hidden;
      background-color: ${({ theme }) => theme.colors.gray2};
      @media (max-width: 1024px) {
        width: 100%;
        height: 25vh;
      }
    }
    > .no-thumbnail {
      @media (max-width: 1024px) {
        width: 100%;
        height: 0vh;
      }
    }
    > .content {
      flex-grow: 1;
      padding: 0.25rem 2rem;
      @media (max-width: 1024px) {
        padding: 1rem 0.25rem;
      }

      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        .category {
          align-self: flex-start;
        }

        h2 {
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
          line-height: 1.75rem;
          font-weight: 700;
          cursor: pointer;

          @media (min-width: 768px) {
            font-size: 1.4rem;
            line-height: 1.75rem;
          }
        }
      }
      > .summary {
        margin-bottom: 1rem;
        p {
          display: none;
          line-height: 1rem;
          color: ${({ theme }) => theme.colors.gray11};

          @media (min-width: 768px) {
            display: block;
          }
        }
      }
      > .date {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray10};
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
    }
  }
`
