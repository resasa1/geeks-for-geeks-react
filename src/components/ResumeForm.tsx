import * as React from 'react';

export default function ResumeForm(){
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [gender, setGender] = React.useState('male');
    const [subjects, setSubjects] = React.useState({
        english: true,
        maths: false,
        science: false,
    });
    const [resume, setResume] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [selectOps, setSelectOps] = React.useState('');
    const [about, setAbout] = React.useState('');

    const handleSubmit = (e: { preventDefault: () => void; }):any => {
        e.preventDefault();
        console.log(
            firstname,
            lastname,
            email,
            contact,
            gender,
            selectOps,
            subjects,
            resume,
            url,
            about
        );
    };

    const handleSubjectChange = (sub: keyof typeof subjects) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setContact('');
        setGender('male');
        setSubjects({
            english:true,
            maths: false,
            science: false,
        })
        setResume('');
        setUrl('');
        setSelectOps('');
        setAbout('');
        
    };

    return (
        <div className='bg-slate-950'>
            <h1>Form In react</h1>
            <fieldset>
                <form action='nothing' method='GET'>
                    <label htmlFor='first-name'>
                        First Name
                    </label>
                    <input  type='text'
                            id='first-name'
                            value={firstname}
                            onChange={(e)=> setFirstname(e.target.value)} 
                            placeholder='Typing here'
                            required
                    />
                    <label htmlFor='last-name'>
                        Last Name 
                    </label>
                    <input type='text'
                            id='last-name'
                            value={lastname}
                            onChange={(e)=> setLastname(e.target.value)}
                            placeholder='Typing here'
                            required
                    />
                    <label htmlFor='email'>
                        Enter Email
                    </label>
                    <input type='email'
                            id='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder='Typing here'
                            required
                    />
                    <input type='tel'
                           id='number'
                            value={contact}
                            onChange={(e)=> setContact(e.target.value)}
                            placeholder='Typing here'
                            required
                    />
                    <label htmlFor='gender'>
                        Gender
                    </label>
                    <input type='radio'
                            name='gender'
                            value='male'
                            id='male'
                            checked={gender === 'male'}
                            onChange={(e)=> setGender(e.target.value)} 
                    /> 
                    <input type='radio'
                            name='gender'
                            value='female'
                            id='female'
                            checked={gender === 'female'}
                            onChange={(e)=> setGender(e.target.value)} 
                    />            
                    <label htmlFor='subjects'>
                    Your Best Subject
                    </label>
                    <input type='checkbox'
                            name='subjects'
                            value='english'
                            id='english'
                            checked={subjects.english===true}
                            onChange={(e) => handleSubjectChange('english')}
                    />
                    <input type='checkbox'
                            name='subjects'
                            value='maths'
                            id='maths'
                            checked={subjects.maths===true}
                            onChange={(e) => handleSubjectChange('maths')}
                    />
                    <input type='checkbox'
                            name='subjects'
                            value='science'
                            id='science'
                            checked={subjects.science===true}
                            onChange={(e)=> handleSubjectChange('science')}
                    />
                    <label htmlFor='resume'>
                    Upload Resume
                    </label>
                        <input type='file'
                               name='resume'
                               id='resume'
                               onChange={(e)=> {
                                   if (e.target.files) {
                                       setResume(e.target.files[0]);
                                   }
                               }}
                               placeholder='Upload Here'
                               required
                        />
                    <label htmlFor='url'>
                               Enter URL
                    </label>
                    <input type='url'
                            name='url'
                            id='url'
                            value={url}
                            onChange={(e)=> setUrl(e.target.value)}
                            placeholder='Typing here'
                            required
                    />
                    <select name='selectOps'
                            id='select'
                            value={selectOps}
                            onChange={(e)=> setSelectOps(e.target.value)}
                            >
                            <option value=''
                                    disabled
                                    selected={selectOps === ''}>
                                    Select Your Options
                            </option>
                            <optgroup label='Beginner'>
                               <option value='1'>HTML</option>
                                 <option value='2'>CSS</option>
                                    <option value='3'>JS</option>
                            </optgroup>
                            <optgroup label='Intermediate'>
                               <option value='4'>React</option>
                                    <option value='5'>Angular</option>
                                        <option value='6'>Vue</option>
                            </optgroup>
                    </select>
                    <label htmlFor='about'>
                        About
                    </label>
                    <textarea name='about'
                                id='about'
                                value={about}
                                onChange={(e)=> setAbout(e.target.value)}
                                placeholder='Typing here'
                                required
                    />
                    <button onClick={(e)=> handleSubmit(e)}>Submit</button>
                    <button onClick={()=> handleReset()}>Reset</button>
                </form>
            </fieldset>

        </div>
    )

}