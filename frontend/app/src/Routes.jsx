import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import CadastroPaciente from "./Pages/CadastroPaciente/CadastroPaciente"
import CadastroTreino from "./Pages/CadastroTreino/CadastroTreino"
import { PrivateRoute } from "./PrivateRoute"
import VerTreinos from './Pages/VerTreinos/VerTreinos'
import EditarTreinos from './Pages/EditarTreinos/EditarTreinos'
import AgendaConsulta from './Pages/AgendaConsulta/AgendaConsulta'
import VerPaciente from "./Pages/VerPaciente/VerPaciente"
import CriarDieta from "./Pages/CriarDieta/CriarDieta"
import VerDieta from "./Pages/VerDieta/VerDieta"
import EditarDieta from "./Pages/EditarDieta/EditarDieta"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/cadastrarPaciente" element={<PrivateRoute><CadastroPaciente /></PrivateRoute>} />
				<Route path="/verPaciente/:id" element={<PrivateRoute><VerPaciente/></PrivateRoute>} />
				<Route path="/cadastroTreino" element={<PrivateRoute><CadastroTreino /></PrivateRoute>} />
				<Route path="/verTreinos" element={<PrivateRoute><VerTreinos /></PrivateRoute>} />
				<Route path="/editarTreinos" element={<PrivateRoute><EditarTreinos /></PrivateRoute>} />
				<Route path="/agendaConsulta" element={<PrivateRoute><AgendaConsulta /></PrivateRoute>} />


				<Route path="/criarDieta" element={<PrivateRoute><CriarDieta/></PrivateRoute>}/>
				<Route path="/verDieta" element={<PrivateRoute><VerDieta/></PrivateRoute>}/>
				<Route path="/editarDieta" element={<PrivateRoute><EditarDieta/></PrivateRoute>}/>
			</Routes>
		</BrowserRouter>
	)
}
