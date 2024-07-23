import logo from './logo.svg';
import './App.css';
import CustomHeading1 from './components/headings/customheadings';
import CustomButton from './components/button/custombutton';
import ListItems from './components/lists/listitems';
import ListParent from './components/lists/listParent';
import UnorderList from './components/lists/unorderedList';
import CustomImage from './components/image/customimage';
function App() {
  return (
    <div>
    <CustomHeading1 />
    <CustomButton/>
    <ListItems/>
    <ListParent/>
    <UnorderList/>
    <CustomImage/>

    </div>
  );
}

export default App;
