<template>
  <v-container class="text-center text-light-blue">
    <h1 class="text-h2 font-weight-bold">Glossary</h1>

    <div class="text-left pt-10 text-h5">
      <div id="dead-ball" class="py-5">
        <p class="font-weight-bold">Dead Ball</p>
        A dead ball is any ball that has:
        <ul class="pl-5">
          <li>Not been checked on the rush.</li>
          <li>Contacted an eliminated player.</li>
          <li>Contacted another dead ball.</li>
          <li>Contacted the floor / ceiling / or walls of the gym</li>
          <li>Been kicked or spiked.</li>
          <li>
            When a player is out for any reason, all balls under his/her
            possession are dead.
          </li>
        </ul>
      </div>
      <div id="dying-ball" class="py-5">
        <p class="font-weight-bold">Dying Ball</p>
        <ul class="pl-5">
          <li>A ball that has hit a player, but has not yet become dead.</li>
        </ul>
      </div>
      <div id="live-ball" class="py-5">
        <p class="font-weight-bold">Live Ball</p>
        <ul class="pl-5">
          <li>
            A ball that has been activated by checking it passed the attack
            line.
          </li>
        </ul>
      </div>
      <div id="match" class="py-5">
        <p class="font-weight-bold">Match</p>
        <ul class="pl-5">
          <li>A collection of games between two teams.</li>
        </ul>
      </div>
      <div id="in" class="py-5">
        <p class="font-weight-bold">In</p>
        <ul class="pl-5">
          <li>Being eligible to participate in the game on the court.</li>
        </ul>
      </div>
      <div id="out" class="py-5">
        <p class="font-weight-bold">Out</p>
        <ul class="pl-5">
          <li>
            Ineligible to play in the game as a result of being hit, caught, or
            touching/going past the court's boundaries.
          </li>
        </ul>
      </div>
      <div id="opening-rush" class="py-5">
        <p class="font-weight-bold">Opening Rush</p>
        <ul class="pl-5">
          <li>
            When players approach the center line to retrieve the balls at the
            signal of the referee.
          </li>
        </ul>
      </div>
      <div id="control" class="py-5">
        <p class="font-weight-bold">Control</p>
        <ul class="pl-5">
          <li>
            A player has control of a ball when they have it secured in their
            hands.
          </li>
        </ul>
      </div>
      <div id="burden" class="py-5">
        <p class="font-weight-bold">Burden to Throw</p>
        <ul class="pl-5">
          <li>
            If a team has three balls with the burden ball or has ball majority
            (four or more balls) it is their responsibility to make an attack
            and relinquish the original ball majority or burden ball within 10
            seconds.
          </li>
        </ul>
      </div>
      <div id="volley" class="py-5">
        <p class="font-weight-bold">Volley</p>
        <ul class="pl-5">
          <li>
            A volley is a group throw of multiple balls. All balls arriving at a
            defending player at the same time are part of the same volley. Any
            balls that arrive unambiguously early or late to the defender are
            not a part of the same volley.
          </li>
          <li>
            Each team can have a separate volley. If Team A throws while Team B
            also throws, that is two SEPARATE volleys.
          </li>
          <li>
            I.E. If Team A throws at a Player on Team B, and that Player on Team
            B also throws at Team A, that is two separate volleys, and events
            that happen during each volley are separate events.
          </li>
          <ul class="pl-5">
            <li>
              Example: If the player on Team B gets hit in the head as an
              illegal headshot, all other balls thrown at that player are null
              and void. BUT if the ball that the player on Team B threw is
              caught, that is still a catch, resulting in that player being out
              because of the catch, not the headshot.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </v-container>
</template>
