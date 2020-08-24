<template>
  <div class="board">
    <div class="board_center">
      <div class="community-chest-deck">
        <h2 class="label">Community Chest</h2>
        <div class="deck"></div>
      </div>
      <h1 class="board_title">MONOPOLY</h1>
      <div class="chance-deck">
        <h2 class="label">Chance</h2>
        <div class="deck"></div>
      </div>
    </div>
    <div class="board_space corner go">
      <div class="board_container">
        <div class="instructions">Collect $200.00 salary as you pass</div>
        <div class="go-word">go</div>
      </div>
      <div class="arrow fa fa-long-arrow-left"></div>
    </div>

    <div class="board_row horizontal-row bottom-row">
      <div class="board_space property">
        <div class="board_container">
          <div class="color-bar light-blue"></div>
          <div class="name">Connecticut Avenue</div>
          <div class="price">PRICE $120</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="color-bar light-blue"></div>
          <div class="name">Vermont Avenue</div>
          <div class="price">Price $100</div>
        </div>
      </div>
      <div class="board_space chance">
        <div class="board_container">
          <div class="name">Chance</div>
          <i class="drawing fa fa-question"></i>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="color-bar light-blue"></div>
          <div class="name">Oriental Avenue</div>
          <div class="price">Price $100</div>
        </div>
      </div>
      <div class="board_space railroad">
        <div class="board_container">
          <div class="name">Reading Railroad</div>
          <i class="drawing fa fa-subway"></i>
          <div class="price">Price $200</div>
        </div>
      </div>
      <div class="board_space fee income-tax">
        <div class="board_container">
          <div class="name">Income Tax</div>
          <div class="diamond"></div>
          <div class="instructions">
            Pay 10%
            <br />or
            <br />$200
          </div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="color-bar dark-purple"></div>
          <div class="name">Baltic Avenue</div>
          <div class="price">Price $50</div>
        </div>
      </div>
      <div class="board_space community-chest">
        <div class="board_container">
          <div class="name">Community Chest</div>
          <i class="drawing fa fa-cube"></i>
          <div class="instructions">Follow instructions on top card</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="color-bar dark-purple"></div>
          <div class="name three-line-name">
            Mediter-
            <br />ranean
            <br />Avenue
          </div>
          <div class="price">Price $50</div>
        </div>
      </div>
    </div>

    <div class="board_space corner jail">
      <div class="just">Just</div>
      <div class="drawing">
        <div class="board_container">
          <div class="name">In</div>
          <div class="window">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <i class="person fa fa-frown-o"></i>
          </div>
          <div class="name">Jail</div>
        </div>
      </div>
      <div class="visiting">Visiting</div>
    </div>

    <div class="board_row vertical-row left-row">
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left orange"></div>
          <div class="property-vertical-text">
            <div class="name">New York Avenue</div>
            <div class="price">Price $200</div>
          </div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left orange"></div>
          <div class="property-vertical-text">
            <div class="name">Tennessee Avenue</div>
            <div class="price">Price $180</div>
          </div>
        </div>
      </div>
      <div class="board_space community-chest">
        <div class="board_container" style="left:0;top:0;justify-content: flex-start; width: 100%">
          <div class="name" style="padding-bottom: 0px;">Community Chest</div>
          <i class="drawing fa fa-cube"></i>
          <div class="instructions">Follow instructions on top card</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left orange"></div>
          <div class="property-vertical-text">
            <div class="name">St. James Avenue</div>
            <div class="price">Price $180</div>
          </div>
        </div>
      </div>
      <div class="board_space railroad">
        <div class="board_container" style="left:0;top:0;justify-content: flex-start; width: 100%">
          <div class="name long-name" style="padding:0px;">Pennsylvania Railroad</div>
          <i class="drawing fa fa-subway" style="font-size:50px"></i>
          <div class="price">Price $200</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left purple"></div>
          <div class="property-vertical-text">
            <div class="name">Virginia Avenue</div>
            <div class="price">Price $160</div>
          </div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left purple"></div>
          <div class="property-vertical-text">
            <div class="name">States Avenue</div>
            <div class="price">Price $140</div>
          </div>
        </div>
      </div>
      <div class="board_space utility electric-company">
        <div
          class="board_container"
          style="left:0;top:0;justify-content: flex-start; width: 100%; height: auto;"
        >
          <div class="name" style="padding:0px;">Electric Company</div>
          <i class="drawing fa fa-lightbulb-o" style="font-size:50px;"></i>
          <div class="price">Price $150</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit-left">
          <div class="color-bar color-bar-edit-left purple"></div>
          <div class="property-vertical-text">
            <div class="name">St. Charles Place</div>
            <div class="price">Price $140</div>
          </div>
        </div>
      </div>
    </div>

    <div class="board_space corner free-parking">
      <div class="board_container">
        <div class="name">Free</div>
        <i class="drawing fa fa-car"></i>
        <div class="name">Parking</div>
      </div>
    </div>

    <div class="board_row horizontal-row top-row">
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Kentucky Avenue</div>
          <div class="price">Price $220</div>
          <div class="color-bar border-top-edit red"></div>
        </div>
      </div>
      <div class="board_space chance">
        <div class="board_container">
          <div class="name">Chance</div>
          <i class="drawing fa fa-question board_blue"></i>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Indiana Avenue</div>
          <div class="price">Price $220</div>
          <div class="color-bar border-top-edit red"></div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Illinois Avenue</div>
          <div class="price">Price $200</div>
          <div class="color-bar border-top-edit red"></div>
        </div>
      </div>
      <div class="board_space railroad">
        <div class="board_container">
          <div class="name">B & O Railroad</div>
          <i class="drawing fa fa-subway"></i>
          <div class="price">Price $200</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Atlantic Avenue</div>
          <div class="price">Price $260</div>
          <div class="color-bar border-top-edit yellow"></div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Ventnor Avenue</div>
          <div class="price">Price $260</div>
          <div class="color-bar border-top-edit yellow"></div>
        </div>
      </div>
      <div class="board_space utility waterworks">
        <div class="board_container">
          <div class="name" style="padding:0px">Waterworks</div>
          <i class="drawing fa fa-tint"></i>
          <div class="price">Price $120</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container">
          <div class="name">Marvin Gardens</div>
          <div class="price">Price $280</div>
          <div class="color-bar border-top-edit yellow"></div>
        </div>
      </div>
    </div>

    <div class="board_space corner go-to-jail">
      <div class="board_container">
        <div class="name">Go To</div>
        <i class="drawing fa fa-gavel"></i>
        <div class="name">Jail</div>
      </div>
    </div>

    <div class="board_row vertical-row right-row">
      <div class="board_space property">
        <div class="board_container board_container-edit">
          <div class="color-bar color-bar-edit green"></div>
          <div class="property-vertical-text">
            <div class="name">Pacific Avenue</div>
            <div class="price">Price $300</div>
          </div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit">
          <div class="color-bar color-bar-edit green"></div>
          <div class="property-vertical-text">
            <div class="name three-line-name" style="padding-bottom:40px;">North Carolina Avenue</div>
            <div class="price">Price $300</div>
          </div>
        </div>
      </div>
      <div class="board_space community-chest">
        <div class="board_container" style="left:0;top:0;justify-content: flex-start; width: 100%">
          <div class="name" style="padding:0px">Community Chest</div>
          <i class="drawing fa fa-cube"></i>
          <div class="instructions">Follow instructions on top card</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit">
          <div class="color-bar color-bar-edit green"></div>
          <div class="property-edit-text">
            <div class="name long-name" style="padding-bottom:40px;">Pennsylvania Avenue</div>
            <div class="price">Price $320</div>
          </div>
        </div>
      </div>
      <div class="board_space railroad">
        <div
          class="board_container"
          style="left:0;top:0;justify-content: flex-start; width: 100%;height: auto;"
        >
          <div class="name" style="padding:0px">Short Line</div>
          <i class="drawing fa fa-subway" style="font-size: 50px;"></i>
          <div class="price" style="padding: 0px;">Price $200</div>
        </div>
      </div>
      <div class="board_space chance">
        <div
          class="board_container"
          style="left:0;top:0;justify-content: flex-start; width: 100%;height: auto;"
        >
          <div class="name" style="padding:0px">Chance</div>
          <i class="drawing fa fa-question" style="font-size:70px"></i>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit" style="height:100%">
          <div class="color-bar color-bar-edit dark-blue"></div>
          <div class="property-edit-text" style="width: 100%;">
            <div class="name">Park Place</div>
            <div class="price">Price $350</div>
          </div>
        </div>
      </div>
      <div class="board_space fee luxury-tax">
        <div
          class="board_container"
          style="left:0;top:0;justify-content: flex-start; width: 100%;height: auto;"
        >
          <div class="name" style="padding:0px">Luxury Tax</div>
          <div class="drawing fa fa-diamond" style="font-size:45px"></div>
          <div class="instructions">Pay $75.00</div>
        </div>
      </div>
      <div class="board_space property">
        <div class="board_container board_container-edit">
          <div class="color-bar color-bar-edit dark-blue"></div>
          <div class="property-edit-text" style="width: 100%;">
            <div class="name">Boardwalk</div>
            <div class="price">Price $400</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/css/board.css";
//  @import  '../assets/scss/board.scss';
</style>