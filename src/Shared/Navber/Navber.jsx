import { NavLink } from "react-router"

const Navber =() =>{
    return(
        <nav className="navbar bg-base-100 display flex justify-around items-center">
            <a href="/"><img className="w-20" src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg" alt=""/></a>
            <div className="flex gap-[40px] text-xl">
                <NavLink className={({isActive})=>(isActive? 'bg-blue-400  text-white font-bold px-4 py-2 rounded-xl transform-cpu':'px-4 py-2')} to="/">Home</NavLink>
                <NavLink className={({isActive})=>(isActive? 'bg-blue-400  text-white font-bold px-4 py-2 rounded-xl transform-cpu':'px-4 py-2')} to="/about">About</NavLink>
            </div>
            <div>
                <img className="w-14" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
            </div>
        </nav>
    )
}
export default Navber