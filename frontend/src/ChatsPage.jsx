import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
  return (
  <div style={{height: '100vh'}}>
    <PrettyChatWindow
      projectId="cb04c68c-dd2e-4fc8-b2af-210600d06043"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
  </div>
  )
}

export default ChatsPage