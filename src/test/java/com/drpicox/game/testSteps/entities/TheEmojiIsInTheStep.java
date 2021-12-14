package com.drpicox.game.testSteps.entities;

import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class TheEmojiIsInTheStep extends AbstractPostLineStep {

    private final EntityTestView entityTestView;

    public TheEmojiIsInTheStep(EntityTestView entityTestView) {
        this.entityTestView = entityTestView;
    }

    @Override
    protected String getRegex() {
        return "The \"([^\"]+)\" emoji is (not )?in the \"([^\"]+)\" \"([^\"]+)\" \"([^\"]+)\""; }

    @Override
    protected void run(PostLine line, String[] match) {
    }
}
