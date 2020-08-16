import React from 'react';
import {Button, Image, Divider, Header, Icon, Grid} from 'semantic-ui-react'

import Comments from "./comment.js"
import hy from "./HY.png"
import HB from "./HB.jpeg"

function App() {
  return (
    <div>
    <Grid centered>
    <Grid.Row>
    <Image src = {hy} style = {{"width": 250, "height":200, "padding" : "35px"}} centered />
    </Grid.Row>
    <Grid.Row>
    <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='blue'
      content='Share'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
  />

    </Grid.Row>
    </Grid>
  <Divider horizontal>
 <Header as='h4'>
  <Icon name='comments' />
  댓글 달기
</Header>
</Divider>
<Comments/>

      </div>
  );
}

export default App;
