import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import SignIn  from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Donate from './components/Pages/Donate';
import OrphanDetails from './components/Admin/Orphans/ChildInfo';
import Newsletter from './components/Admin/Newsletter';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import Missions from './components/Admin/Missions';
import Feedback from './components/Admin/Feedback';
import PhotoGallery from './components/Admin/PhotoGallery';
import Doctor_Details from './components/Admin/Doctors/DoctorInfo';
import Parentt_Details from './components/Admin/Parents/ParentInfo';
import DrNavbar from './components/Doctor_Login/DrNavbar'; 
import OrphanUMe from './components/Doctor_Login/OrphanUMe'
import DrProfile from './components/Doctor_Login/DrProfile';

import AddPhotoGallery from './components/Admin/AddPhotoGallery';
import Donation from './components/Admin/Donation';
import AddMission from './components/Admin/AddMission';
import AddNewsletter from "./components/Admin/AddNewsletter"
import ParentDashboard from './components/Admin/Parents/ParentDashboard';
import AddParents from './components/Admin/Parents/AddParents';
import EditParents from './components/Admin/Parents/EditParents';
import ListParents from './components/Admin/Parents/ListParents';
import HeaderParents from './components/Admin/Parents/HeaderParents';
import AddDoctors from './components/Admin/Doctors/AddDoctors';
import EditDoctors from './components/Admin/Doctors/EditDoctors';
import ListDoctors from './components/Admin/Doctors/ListDoctors';
import HeaderDoctors from './components/Admin/Doctors/HeaderDoctors';
import DoctorDashboard from './components/Admin/Doctors/DoctorDashboard';
import AddOrphans from './components/Admin/Orphans/AddOrphans';
import EditOrphans from './components/Admin/Orphans/EditOrphans';
import ListOrphans from './components/Admin/Orphans/ListOrphans';
import HeaderOrphans from './components/Admin/Orphans/HeaderOrphans';
import OrphanDashboard from './components/Admin/Orphans/OrphanDashboard';
import BeParent from './components/Parent_Login/BeParent';
import ParentNavbar from './components/Parent_Login/ParentNavbar';
import Parent_Login_ContactUs from './components/Parent_Login/Parent_Login_ContactUs';
import Profile from './components/Parent_Login/Profile'
import ViewOrphan from './components/Parent_Login/ViewOrphan'


function App() {
  return (
   <> 
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/donate" element={< Donate/>} />
      {/* Admin pages */}
      <Route path="/admin" element={<OrphanDetails/>} />
      <Route path="/newsletter" element={<Newsletter/>} />
      <Route path="/missions" element={<Missions/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/photogallery" element={<PhotoGallery/>} />
      <Route path="/doctors" element={<Doctor_Details/>} />
      <Route path="/parent_details" element={<Parentt_Details/>} />
      <Route path="/AddPhotoGallery" element={<AddPhotoGallery/>}/>
      <Route path="/Donation" element={<Donation/>}/>
      <Route path="/AddMission" element={<AddMission/>}/>
      <Route path="/AddNewsletter" element={<AddNewsletter/>}/>
      
      {/* Doctor pages */}
      <Route path='/drhome' element={< DrProfile />} />
      <Route path='/orphanUMe' element={<OrphanUMe />} />
      <Route path="/AddDoctors" element={<AddDoctors/>}/>
      <Route path="/EditDoctors" element={<EditDoctors/>}/>
      <Route path="/ListDoctors" element={<ListDoctors/>}/>
      <Route path="/HeaderDoctors" element={<HeaderDoctors/>}/>
      <Route path="/DoctorDashboard" element={<DoctorDashboard/>}/>
    

      {/* Parent pages */}
     
      <Route path="/AddParents" element={<AddParents/>}/>
      <Route path="/EditParents" element={<EditParents/>}/>
      <Route path="/ListParents" element={<ListParents/>}/>
      <Route path="/HeaderParents" element={<HeaderParents/>}/>
      <Route path="/ParentDashboard" element={<ParentDashboard/>}/>
      <Route exact path="/Parent_Login_ContactUs" element={<Parent_Login_ContactUs/>} />
    <Route exact path="/Profile" element={<Profile/>}/>
    <Route exact path="/Logout" element={<BeParent/>}/>
    <Route exact path="/BeParent" element={<BeParent/>}/>
    <Route exact path="/ViewOrphan" element={<ViewOrphan/>}/>
    

      {/*Orphan Pages*/}
      <Route path="/OrphanDashboard" element={<OrphanDashboard/>}/>
      <Route path="/AddOrphans" element={<AddOrphans/>}/>
      <Route path="/EditOrphans" element={<EditOrphans/>}/>
      <Route path="/ListOrphans" element={<ListOrphans/>}/>
      <Route path="/HeaderOrphans" element={<HeaderOrphans/>}/>

    </Routes>
   </>
  );
}

export default App;
