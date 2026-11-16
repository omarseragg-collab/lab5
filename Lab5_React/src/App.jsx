import { useState } from 'react'

const startingComments = [
  { id: 1, name: 'Mariam', text: 'Great explanation of components!', likes: 4 },
  { id: 2, name: 'Youssef', text: 'useState updates the screen by itself, cool.', likes: 3 },
  { id: 3, name: 'Nour', text: 'Can we do a lab on forms next week?', likes: 1 },
]

// One comment: round avatar with the first letter, name, text and a like button.
function Comment(props) {
  const comment = props.comment
  return (
    <li className="comment">
      <div className="avatar">{comment.name[0]}</div>
      <div className="bubble">
        <strong>{comment.name}</strong>
        <p>{comment.text}</p>
        <button className="like-btn" onClick={() => props.onLike(comment.id)}>
          ♥ {comment.likes}
        </button>
      </div>
    </li>
  )
}

function CommentsSection() {
  const [comments, setComments] = useState(startingComments)
  const [text, setText] = useState('')

  function postComment() {
    if (text.trim() === '') return
    const newComment = { id: Date.now(), name: 'Omar', text: text.trim(), likes: 0 }
    setComments([...comments, newComment])
    setText('')
  }

  function likeComment(id) {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    )
  }

  return (
    <section className="card">
      <h2>Comments ({comments.length})</h2>

      <div className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={postComment}>Post</button>
      </div>

      <ul className="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onLike={likeComment} />
        ))}
      </ul>
    </section>
  )
}

function App() {
  return (
    <div className="page">
      <CommentsSection />
    </div>
  )
}

export default App
