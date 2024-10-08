import React from 'react';
import './App.css';
import Subject from './Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import { useState } from 'react';
import Example from './components/Example';


function App() {
  //useState를 사용하여 상태를 설정
  const [subject, setSubject] = useState(
    {
      title:'web',
      sub:'world wide web',
    }
  );

  return (
    <div className="App">
      <Subject title={subject.title}
                sub = {subject.sub}
      />
      <TOC/>
      <Example/>
      <Content title="제목" description="제목입니다"/>
    </div>
  );
}

export default App;
