import style from './DataForAppTest.module.scss';


const DataForAppTest = () =>
    (<div className={style.usersForTest}>
        <div>
            <p>Email</p>
            <p>Password</p>
        </div>
        <div>
            <p>patientuser@mail.com</p>
            <p>123456</p>
        </div>
        <div>
            <p>doctoruser@mail.com</p>
            <p>123456</p>
        </div>
        <div>
            <p>administratoruser@mail.com</p>
            <p>123456</p>
        </div>
    </div>)

export default DataForAppTest;
