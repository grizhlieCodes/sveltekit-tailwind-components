

//! TO DO LISt
    //: Function to check if localStorage exists for darkmode. Or make a store
    //: of some sort for everything related to darkmode like you did with other
    //: projects. We can then keep all logic contained. Or create a class?

    //: Reason: We are no longer 
export const toggleDarkMode = () => {
    let body = document.body
    body.classList.toggle('dark')
    let bodyIsDark = body.classList.contains('dark')
    localStorage.setItem('darkMode', JSON.stringify(bodyIsDark))
    console.log(`Checked DM: ${JSON.parse(localStorage.getItem('darkMode'))}`)
}

export const checkDarkMode = () => {
    let darkMode = JSON.parse(localStorage.getItem('darkMode'))
    console.log(`Checked DM: ${darkMode}`)
    return darkMode
}

export const setDarkMode = (darkMode) => {
    let body = document.body
    if(darkMode){
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
    console.log(`Set DM: ${darkMode}`)
}