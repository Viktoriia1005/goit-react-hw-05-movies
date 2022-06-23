// import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, } from 'react';



const Navigation = lazy(() => import("./Navigation" ));
const HomePage = lazy(() => import("../pages/HomePage" ));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage" ));

export default function App() {
  return (
    <>
    <Navigation />
    <HomePage/>
    <MovieDetailsPage />
      {/* <Container> 
        <Suspense fallback={<Loader/>}>
        <Navigation />
        <Routes>
            <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
          <Toaster position="top-right" />
          </Suspense>
          </Container> */}
    </>
  );
}
