function projectCreationCalculator([name, projects]){
    let proj_time = 3
    let architect = name
    let nmbr_proj = Number(projects)
    let timeNeeded = nmbr_proj * proj_time 

    console.log(`The architect ${architect} will need ${Math.ceil(timeNeeded)} hours to complete ${nmbr_proj} project/s.`)
}

projectCreationCalculator(['George', 4])
projectCreationCalculator(["Sanya", "9"])