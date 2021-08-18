package com.drpicox.game.players;

import com.drpicox.game.players.Player;
import com.drpicox.game.players.api.NewPlayerForm;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class PlayersController {
    private PlayerRepository playerRepository;

    public PlayersController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public void addPlayer(String playerName, String password) {
        var player = new Player(playerName, password);
        playerRepository.save(player);
    }

    private Optional<Player> findPlayer(String playerName) {
        return playerRepository.findById(playerName);
    }

    public Optional<String> findPlayerToken(String playerName, String password) {
        return findPlayer(playerName)
                .filter(playerFound -> playerFound.isPasswordOk(password))
                .map(playerFound -> playerFound.getToken());
    }
}
