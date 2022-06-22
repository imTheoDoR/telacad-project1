import React from 'react';
import UserAddFrom from './components/Users/UserAddForm';
import UserList from './components/Users/UserList';
import PostList from './components/Posts/PostList';
import './App.css';
import { Button } from './GlobalStyled';
import { IoPeopleOutline, IoNewspaperOutline } from 'react-icons/io5';

class App extends React.Component {
  constructor() {
    super(); // cheama elemente
    this.state = {
      background: '#f0f0f0',
      textColor: '#000',
      users: [],
      posts: [],
      content: 'users',
      errors: ''
    };
  }

  // Apelam componeneDidMount pentru a face apela o singura data
  componentDidMount() {
    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Daca raspunsul nu este "ok" adica status 2**
        // aplicatia nu va crasui, in schimb vom primi in consola
        // un mesaj cu starea API -ului
        if (!response.ok) {
          throw new Error(
            `Users HTTP error: ${response.status}`
          );
        }

        return response.json();
      })
      .then((result) => {
        // filtram datele venite de la API ,
        // astfel incat pe ecran sa fie afisati doar
        // 3 utilizatori

        // adaugati fiecarui user o proprietate "isGoldClient"
        // cu valoarea "false"

        // filtram utilizatorii care au id-ul mai mic decat 4
        const filteredResult = result.filter(user => user.id < 6);

        // creeam un forEach pentru filtru, iar fiecare filtru va lua
        // un element pentru fiecare user
        // forEach nu returneaza un array now, modifica array ul initial
        filteredResult.forEach((user) => {
          user.isGoldClient = false;
        })

        // pasam in state
        this.setState({ users: filteredResult })
      })
      .catch((error) => {
        console.log(error.message);
      })

    // Fetch post
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw Error(
            `Posts HTTP Error: ${response.status}`
          );
        }
        return response.json();
      })
      .then((result) => {

        // Filtram articolele care au un id mai mic decat 4
        const filteredResult = result.filter(post => post.id < 4);

        // pasam rezultatul in state
        this.setState({ posts: filteredResult })
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  // functia getMaxId calculeaza id-ul maxim pentru un vector de useri
  getMaxId(users) {
    let maxId = 0;

    // parcurge fiecare user si verifica daca id-ul
    // lui este mai mare decat cel mai mare id de pana atunci
    users.forEach(user => {
      maxId = user.id;
    });

    return maxId;
  }

  handleBgChange(event) {
    const userBg = event.target.value;
    this.setState({ background: userBg });
  }

  handleTextColorChange(event) {
    const userTextColor = event.target.value;
    this.setState({ textColor: userTextColor });
  }

  handleContentChange() {
    const getContent = this.state.content;

    if (getContent === 'users') {
      this.setState({ content: 'posts' })
    } else {
      this.setState({ content: 'users' })
    }
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();

    if (name === '') {
      return this.setState({ errors: 'Numele este obligatoriu!' });
      // return console.log('Numele este obligatoriu!');
    }

    if (name.length <= 5) {
      return this.setState({ errors: 'Numele trebie sa aibe o lungime mai mare de 5 caractere.' });
      // return console.log('Numele trebie sa aibe o lungime mai mare de 5 caractere.');
    }

    if (email === '') {
      return this.setState({ errors: 'Adresa de email este obligatorie!' });
      // return console.log('Adresa de email este obligatorie!');
    }

    this.setState((prevState) => {
      return {
        // Daca utilizatorul a trecut de
        // validarea datelor, state-ul pentru
        // erori se va reseta
        errors: '',
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    const bgColor = this.state.background;
    const textColor = this.state.textColor;
    const content = this.state.content;

    return (

      <div className='App' style={{ background: bgColor, color: textColor }}>

        {/* stiu ca nu este recomandat folosirea 'style' in taguri
        daaar avand in vedere ca nu este un "proiect" pentru
        production, am folosit :D */}
        <div 
          style={{ textAlign: 'center', margin: '0 0 40px 0', padding: '40px 0 0 0' }}>
          {
            content === 'posts'
            ? <Button secondary type='button' onClick={() => this.handleContentChange()}><span style={{ display: 'flex', alignItems: 'center' }}><IoPeopleOutline style={{ fontSize: '1.2rem', marginRight: '5px' }}/> Afiseaza utilizatorii</span></Button>
            : <Button type='button' onClick={() => this.handleContentChange()}><span style={{ display: 'flex', alignItems: 'center' }}><IoNewspaperOutline style={{ fontSize: '1.2rem', marginRight: '5px' }}/>Afiseaza articolele</span></Button>
          }
        </div>

        {/* Pasam state-ul users in componenta UserList */}
        {
          content === 'posts'
            ?
            <>
              <PostList posts={this.state.posts}/>
            </>
            :
            <>
              {/* useraddform va primi un props 'updateUsersList' iar
              ca valoare va avea 'this.updateUsersList'
              
              functia this.updateUsersList trebuie sa-i fie arrow function*/}
              <UserAddFrom errors={this.state.errors} submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
              <UserList users={this.state.users}/>
            </>
        }

        <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', margin: '40px 0', padding: '20px 0'}}>
          <div style={{ marginRight: '40px' }}>
            <span>Background Color:</span>
            <input type='color' value={this.state.background} onChange={(event) => this.handleBgChange(event)}/>
          </div>
          <div>
            <span>Text Color:</span>
            <input type='color' value={this.state.textColor} onChange={(event) => this.handleTextColorChange(event)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
