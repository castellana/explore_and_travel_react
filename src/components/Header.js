import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <main>
            <section id="header">
                <section className="title-wrapper">
                    <h1>Explore and Travel</h1>
                    <h3>Holiday finder</h3>
                    <hr className="smallLine" />
                    <article id="select-group"> 
                        <select name="selectLocation" defaultValue={'default'} id="">
                            <option value="default">Location</option>
                            <option value="">Germany</option>
                            <option value="">Spain</option>
                            <option value="">France</option>
                        </select>
                        <select name="selectActivity" defaultValue={'default'}>
                            <option value="default">Activity</option>
                            <option value="">Hiking</option>
                            <option value="">Scuba Diving</option>
                            <option value="">Mountain biking</option></select>
                        <select name="selectGrade" id="" defaultValue={'default'}>
                            <option value="default">Grade</option>
                            <option value="">Beginner</option>
                            <option value="">Middle</option>
                            <option value="">Advance</option></select>
                        <select name="selectDate" id="" defaultValue={'default'}>
                            <option value="default">Date</option>
                        </select>
                        <Link to="/destinations" className="buttonOrange">Explore</Link> 
                    </article>
                
                </section>

                <img src="/img/header-explorer.png" alt=""/>
            </section>
        </main>
     );
}
 
export default Header;