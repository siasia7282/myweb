import React from "react";
import {
  Icon,
  Comment,
  Form,
  Button,
  Header,
  Divider,
  Grid,
} from "semantic-ui-react";

function SingleComment(detail) {
  return (
          <Comment>
            <Comment.Avatar as="a" src="./HB.jpeg" />
            <Comment.Content>
              <Comment.Author as="a">user</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
              </Comment.Metadata>
              <Comment.Text>{detail.content}</Comment.Text>
              <Comment.Actions>
                <Comment.Action active>Reply</Comment.Action>
              </Comment.Actions>
              <Form reply>
                <Form.TextArea
                  value={this.state.inputContent}
                  placeholder="댓글입력"
                  onChange={(e) =>
                    this.setState({ inputContent: e.target.value })
                  }
                />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                  onClick={() =>
                    this.setState((prevState) => {console.log("dk")
                      return {
                        commentsList: [
                          ...prevState.commentsList,
                          this.state.inputContent,
                        ],
                      };
                    })
                  }
                />
              </Form>
            </Comment.Content>
          </Comment>)
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: " ",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group style={{ marginLeft: "430px" }}>
        <Comment>
          <Comment.Avatar as="a" src="./HB.jpeg" />
          <Comment.Content>
            <Comment.Author as="a">user</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
            </Comment.Metadata>
            <Comment.Text>{detail.content}</Comment.Text>
            <Comment.Actions>
              <Comment.Action active>Reply</Comment.Action>
            </Comment.Actions>
            <Form reply>
              <Form.TextArea
                value={this.state.inputContent}
                placeholder="댓글입력"
                onChange={(e) =>
                  this.setState({ inputContent: e.target.value })
                }
              />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
                onClick={() =>
                  this.setState((prevState) => {console.log("dk")
                    return {
                      commentsList: [
                        ...prevState.commentsList,
                        this.state.inputContent,
                      ],
                    };
                  })
                }
              />
            </Form>
          </Comment.Content>
        </Comment>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="mail" />
            Contact me!
          </Header>

          <singleComment

          {this.state.commentsList.map((comments) => (
            <SingleComment content={comments} />
          ))}
        </Divider>
        <br />
        <div>
          <Grid centered>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="twitter">
              <Icon name="twitter" /> Twitter
            </Button>
            <Button color="google plus">
              <Icon name="google" /> Gmail
            </Button>
            <Button color="instagram">
              <Icon name="instagram" /> Instagram
            </Button>
            <Button color="youtube">
              <Icon name="youtube" /> YouTube
            </Button>
          </Grid>
          <br />
        </div>
      </Comment.Group>
    );
  }
}

export default Comments;
