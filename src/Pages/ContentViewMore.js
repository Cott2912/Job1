import '../Style/ContentViewMore.css';
import About1Games from '../Components/About1Game';
import News from '../Components/News';
import AddPage from '../Components/AddPage';
const ContentViewmore = () => {
    return (
        <>
            <About1Games />
            <News title="New Games" />
            <News />
            <AddPage />

        </>

    );
}
export default ContentViewmore;