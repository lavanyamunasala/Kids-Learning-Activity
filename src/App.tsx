/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AlphabetBoard from './components/AlphabetBoard';
import VideoLessons from './components/VideoLessons';
import MatchGame from './components/MatchGame';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AlphabetBoard />
        <VideoLessons />
        <MatchGame />
      </main>
      <Footer />
    </div>
  );
}
