package com.drpicox.game.testSteps.newPlayer;

import com.drpicox.game.players.api.NewPlayerForm;
import com.drpicox.game.players.api.PlayersApi;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ThereIsYourPlayerStep extends AbstractPostLineStep {

    private PlayersApi playersApi;

    public ThereIsYourPlayerStep(PlayersApi playersApi) {
        this.playersApi = playersApi;
    }

    @Override
    protected String getRegex() {
        return "there is your player";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        playersApi.newPlayer(new NewPlayerForm("leonard", "tbbt12"));
    }
}
