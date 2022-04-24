import "./index.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Products from "./pages/Products";
import CDMPStudyPlan from "./products/cdmp-fundamentals/CDMPStudyPlan";
import BIDSEmailBootcamp from "./products/other/BIDSEmailBootcamp";
import TShirt from "./products/physical/TShirt";
import Mug from "./products/physical/Mug";
import FundamentalsNotes from "./products/cdmp-fundamentals/FundamentalsNotes";
import CDMPExamQuestions from "./products/cdmp-fundamentals/CDMPExamQuestions";
import Poster from "./products/physical/Poster";
import SpecialistGuides from "./products/cdmp-specialist/SpecialistGuides";
import SpecialistQuestions from "./products/cdmp-specialist/SpecialistQuestions";
import CareerCoaching from "./products/services/CareerCoaching";
import ResumeReview from "./products/services/ResumeReview";
import InterviewPrep from "./products/services/InterviewPrep";
import Membership from "./products/Membership";
// import TestProduct from "./products/TestProduct";

import Checkout from "./pages/Checkout";
import Oath from "./pages/oath/Oath";
import Resources from "./pages/Resources";
import Foundations from "./posts/Foundations";
import OathPost from "./posts/OathPost";
import Warehouse from "./posts/Warehouse";
import CDMP from "./posts/CDMP";
import Specialist from "./posts/Specialist";
import DataScience from "./posts/DataScience";
import Coaching from "./posts/CareerCoaching";
import Footer from "./components/Footer";
// import APItest from "./pages/APItest";

export default function App() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/checkout">
            <Checkout />
          </Route>
          <Route exact path="/products/cdmp-study-plan">
            <CDMPStudyPlan />
          </Route>
          <Route exact path="/products/data-science-email-bootcamp">
            <BIDSEmailBootcamp />
          </Route>
          <Route exact path="/products/t-shirt">
            <TShirt />
          </Route>
          <Route exact path="/products/mug">
            <Mug />
          </Route>
          <Route exact path="/products/cdmp-exam-questions">
            <CDMPExamQuestions />
          </Route>
          <Route exact path="/products/cdmp-fundamentals-notes">
            <FundamentalsNotes />
          </Route>
          <Route exact path="/products/membership">
            <Membership />
          </Route>
          <Route exact path="/products/poster">
            <Poster />
          </Route>
          <Route exact path="/products/specialist-exam-guides">
            <SpecialistGuides />
          </Route>
          <Route exact path="/products/specialist-exam-questions">
            <SpecialistQuestions />
          </Route>
          <Route path="/oath">
            <Oath />
          </Route>
          <Route exact path="/products/career-coaching">
            <CareerCoaching />
          </Route>
          <Route exact path="/products/resume-review">
            <ResumeReview />
          </Route>
          <Route exact path="/products/interview-prep">
            <InterviewPrep />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route path="/resources/foundations">
            <Foundations />
          </Route>
          <Route path="/resources/oath">
            <OathPost />
          </Route>
          <Route path="/resources/warehouse">
            <Warehouse />
          </Route>
          <Route path="/resources/cdmp">
            <CDMP />
          </Route>
          <Route path="/resources/specialist">
            <Specialist />
          </Route>
          <Route path="/resources/data-science-for-leaders">
            <DataScience />
          </Route>
          <Route path="/resources/career-coaching">
            <Coaching />
          </Route>
          <Route path="/products/:id/checkout">
            <Checkout />
          </Route>
          {/* <Route path="/apitest">
            <APItest />
          </Route> */}
          {/* <Route path="/products/testproduct">
            <TestProduct />
          </Route> */}
        </Switch>
      </div>
      <Footer />
    </>
  );
}
