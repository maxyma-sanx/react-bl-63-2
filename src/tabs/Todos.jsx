import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  handleSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {this.state.todos.map((elem, index) => {
            return (
              <GridItem key={elem.id}>
                <Todo text={elem.text} counter={index + 1} />
              </GridItem>
            );
          })}
        </Grid>
      </>
    );
  }
}
