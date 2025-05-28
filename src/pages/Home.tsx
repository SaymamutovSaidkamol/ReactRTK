import { useGetCommentsQuery } from '../redux/api/comment.api'
import CommentWrapper from '../components/comment-wrapper/CommentWrapper'

const Home = () => {

  const { isLoading } = useGetCommentsQuery({ limit: 500 })


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <CommentWrapper />
    </div>
  )
}

export default Home