import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import banner from "./deliveryBanner.jpg";

// Components
import Banner from "./components/components-banner";
import Navbar from "./components/components-navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <span>
          <Route path="/" exact component={Banner} />

          <Route path="/" exact component={Navbar} />

          <div class="flex">
            <a class="p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              faucibus libero erat. Aenean ornare sed urna sit amet hendrerit.
              Praesent elementum, dolor eget tincidunt suscipit, mi magna
              efficitur neque, vitae maximus nulla lacus nec lacus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras tristique quis nunc nec tincidunt. Nulla ipsum
              eros, egestas id odio a, consectetur feugiat libero. Integer lacus
              elit, finibus sed faucibus a, fermentum sed lacus. Integer
              euismod, odio eget elementum placerat, nibh metus imperdiet urna,
              quis ornare risus lectus vulputate augue. Suspendisse non lectus
              neque. Mauris mauris nisi, sodales volutpat fringilla at,
              malesuada id tellus. Mauris ex ex, faucibus vitae consectetur vel,
              porta ut eros. Donec convallis massa ac tellus tempus, eget ornare
              nisi posuere. Nullam tristique elit at erat laoreet, ut mattis
              nibh sagittis.
              <br />
              <br />
              Fusce sit amet magna porttitor, pellentesque ex non, tristique
              sem. Etiam aliquam urna quis blandit interdum. Curabitur sed
              efficitur risus. Donec sit amet mauris pharetra, mollis lorem
              vitae, condimentum sem. Integer sollicitudin tempor dolor, eu
              porta odio scelerisque vitae. Pellentesque luctus, mauris ac
              interdum imperdiet, enim ligula condimentum nisi, eget maximus
              augue ligula id magna. Pellentesque id facilisis diam. Duis eu
              scelerisque purus. Mauris vitae ex dolor. Vivamus placerat, purus
              dignissim facilisis viverra, risus enim faucibus tortor, sit amet
              cursus augue diam nec eros. Ut ante nunc, imperdiet eget tellus
              eget, ullamcorper vestibulum enim. Donec tincidunt tristique neque
              ultrices tristique. Pellentesque et luctus magna. Integer porta
              mauris vel erat semper dignissim. Maecenas viverra dui eget enim
              tempor aliquet.
              <br />
              <br />
              Nulla nibh ligula, ultrices nec metus vitae, semper vehicula odio.
              Proin viverra augue eu dui dignissim ornare. Donec ac nibh
              scelerisque, blandit est at, vehicula arcu. Mauris vitae neque et
              nisi vulputate congue. Sed non neque et lacus auctor consequat.
              Nullam non leo sodales, hendrerit nulla ut, ornare diam. Sed risus
              tellus, blandit ut dolor eu, hendrerit ultricies justo. Integer
              turpis turpis, bibendum eu gravida eget, aliquet in ex.
              Suspendisse potenti. Cras dui magna, bibendum et condimentum et,
              varius id neque. Vestibulum dignissim nunc at tortor dictum, ut
              sollicitudin lorem ullamcorper. Sed laoreet leo ut sem efficitur,
              vel tincidunt est sagittis. Phasellus luctus tellus mauris, vel
              pulvinar velit condimentum eget.
              <br />
              <br />
              Fusce sit amet magna porttitor, pellentesque ex non, tristique
              sem. Etiam aliquam urna quis blandit interdum. Curabitur sed
              efficitur risus. Donec sit amet mauris pharetra, mollis lorem
              vitae, condimentum sem. Integer sollicitudin tempor dolor, eu
              porta odio scelerisque vitae. Pellentesque luctus, mauris ac
              interdum imperdiet, enim ligula condimentum nisi, eget maximus
              augue ligula id magna. Pellentesque id facilisis diam. Duis eu
              scelerisque purus. Mauris vitae ex dolor. Vivamus placerat, purus
              dignissim facilisis viverra, risus enim faucibus tortor, sit amet
              cursus augue diam nec eros. Ut ante nunc, imperdiet eget tellus
              eget, ullamcorper vestibulum enim. Donec tincidunt tristique neque
              ultrices tristique. Pellentesque et luctus magna. Integer porta
              mauris vel erat semper dignissim. Maecenas viverra dui eget enim
              tempor aliquet.
              <br />
              <br />
              Nulla nibh ligula, ultrices nec metus vitae, semper vehicula odio.
              Proin viverra augue eu dui dignissim ornare. Donec ac nibh
              scelerisque, blandit est at, vehicula arcu. Mauris vitae neque et
              nisi vulputate congue. Sed non neque et lacus auctor consequat.
              Nullam non leo sodales, hendrerit nulla ut, ornare diam. Sed risus
              tellus, blandit ut dolor eu, hendrerit ultricies justo. Integer
              turpis turpis, bibendum eu gravida eget, aliquet in ex.
              Suspendisse potenti. Cras dui magna, bibendum et condimentum et,
              varius id neque. Vestibulum dignissim nunc at tortor dictum, ut
              sollicitudin lorem ullamcorper. Sed laoreet leo ut sem efficitur,
              vel tincidunt est sagittis. Phasellus luctus tellus mauris, vel
              pulvinar velit condimentum eget.
              <br />
              <br />
              Fusce sit amet magna porttitor, pellentesque ex non, tristique
              sem. Etiam aliquam urna quis blandit interdum. Curabitur sed
              efficitur risus. Donec sit amet mauris pharetra, mollis lorem
              vitae, condimentum sem. Integer sollicitudin tempor dolor, eu
              porta odio scelerisque vitae. Pellentesque luctus, mauris ac
              interdum imperdiet, enim ligula condimentum nisi, eget maximus
              augue ligula id magna. Pellentesque id facilisis diam. Duis eu
              scelerisque purus. Mauris vitae ex dolor. Vivamus placerat, purus
              dignissim facilisis viverra, risus enim faucibus tortor, sit amet
              cursus augue diam nec eros. Ut ante nunc, imperdiet eget tellus
              eget, ullamcorper vestibulum enim. Donec tincidunt tristique neque
              ultrices tristique. Pellentesque et luctus magna. Integer porta
              mauris vel erat semper dignissim. Maecenas viverra dui eget enim
              tempor aliquet.
              <br />
              <br />
              Nulla nibh ligula, ultrices nec metus vitae, semper vehicula odio.
              Proin viverra augue eu dui dignissim ornare. Donec ac nibh
              scelerisque, blandit est at, vehicula arcu. Mauris vitae neque et
              nisi vulputate congue. Sed non neque et lacus auctor consequat.
              Nullam non leo sodales, hendrerit nulla ut, ornare diam. Sed risus
              tellus, blandit ut dolor eu, hendrerit ultricies justo. Integer
              turpis turpis, bibendum eu gravida eget, aliquet in ex.
              Suspendisse potenti. Cras dui magna, bibendum et condimentum et,
              varius id neque. Vestibulum dignissim nunc at tortor dictum, ut
              sollicitudin lorem ullamcorper. Sed laoreet leo ut sem efficitur,
              vel tincidunt est sagittis. Phasellus luctus tellus mauris, vel
              pulvinar velit condimentum eget.
              <br />
              <br />
              Fusce sit amet magna porttitor, pellentesque ex non, tristique
              sem. Etiam aliquam urna quis blandit interdum. Curabitur sed
              efficitur risus. Donec sit amet mauris pharetra, mollis lorem
              vitae, condimentum sem. Integer sollicitudin tempor dolor, eu
              porta odio scelerisque vitae. Pellentesque luctus, mauris ac
              interdum imperdiet, enim ligula condimentum nisi, eget maximus
              augue ligula id magna. Pellentesque id facilisis diam. Duis eu
              scelerisque purus. Mauris vitae ex dolor. Vivamus placerat, purus
              dignissim facilisis viverra, risus enim faucibus tortor, sit amet
              cursus augue diam nec eros. Ut ante nunc, imperdiet eget tellus
              eget, ullamcorper vestibulum enim. Donec tincidunt tristique neque
              ultrices tristique. Pellentesque et luctus magna. Integer porta
              mauris vel erat semper dignissim. Maecenas viverra dui eget enim
              tempor aliquet.
              <br />
              <br />
              Nulla nibh ligula, ultrices nec metus vitae, semper vehicula odio.
              Proin viverra augue eu dui dignissim ornare. Donec ac nibh
              scelerisque, blandit est at, vehicula arcu. Mauris vitae neque et
              nisi vulputate congue. Sed non neque et lacus auctor consequat.
              Nullam non leo sodales, hendrerit nulla ut, ornare diam. Sed risus
              tellus, blandit ut dolor eu, hendrerit ultricies justo. Integer
              turpis turpis, bibendum eu gravida eget, aliquet in ex.
              Suspendisse potenti. Cras dui magna, bibendum et condimentum et,
              varius id neque. Vestibulum dignissim nunc at tortor dictum, ut
              sollicitudin lorem ullamcorper. Sed laoreet leo ut sem efficitur,
              vel tincidunt est sagittis. Phasellus luctus tellus mauris, vel
              pulvinar velit condimentum eget.
            </a>
          </div>
        </span>
      </Router>
    );
  }
}

export default App;