# Spark SMP Plugin

## Overview
The **Spark SMP Plugin** is a custom Paper 1.21.1 plugin designed to introduce a set of magical artifacts called *Sparks* into an SMP environment. Players can craft, equip, and activate Sparks to gain unique abilities and passive effects. The plugin also includes a unique Mace weapon, a progression system, and a trust system to prevent friendly fire.

---

## Features

### Sparks
Sparks are powerful artifacts that can be held in a player's main hand or off-hand to grant passive effects and be right-clicked to activate powerful abilities. There are global crafting limits for each spark.

*   **Dune Spark**
    *   **Ability (Right-Click):** Dash 20 blocks. (20s Cooldown)
    *   **Passive:** Permanent Speed I effect.
*   **Breeze Spark**
    *   **Ability (Right-Click):** Pulls players within 20 blocks towards you. (45s Cooldown)
    *   **Passive:** No fall damage & double jump.
*   **Darkness Spark**
    *   **Ability (Right-Click):** Pushes players away and applies Darkness & Slowness III for 15s. (45s Cooldown)
    *   **Passive:** Immune to Wardens, and the Darkness & Blindness effects.
*   **Emerald Spark**
    *   **Ability (Right-Click):** Grants Hero of the Village 255 for 5 minutes. (2m Cooldown)
    *   **Passive:** Iron Golems will not attack you.
*   **Haste Spark**
    *   **Ability (Right-Click):** Grants Haste III for 25s. (50s Cooldown)
    *   **Passive:** Permanent Haste I effect.
*   **Invisibility Spark**
    *   **Ability (Right-Click):** Grants Invisibility for 10s. (30s Cooldown)
    *   **Passive:** Hostile mobs ignore you and permanant Invisibility effect.
*   **Strength Spark**
    *   **Ability (Right-Click):** Grants Strength I for 30s. (45s Cooldown)
    *   **Passive:** Permanent Strength I effect.
*   **Dragon Spark (Unique)**
    *   **Ability 1 (Right-Click):** Flings enemies in a 10-block radius into the air and slams them down. (30s Cooldown)
    *   **Ability 2 (Left-Click):** Launches a Dragon Fireball that deals 5 hearts of damage. (1m Cooldown)
    *   **Passive:** Endermen will not attack you & grants you a total of 20 hearts (40 HP).

### Mace System
The Mace is a unique weapon with a special progression system.
*   **Singleton:** Only one Mace can exist in the world at a time. The recipe is disabled after it's crafted.
*   **Densifying:** The Mace starts unenchanted. For every player kill you get while holding the Mace, it "densifies", increasing its `Sharpness` enchantment up to level V. The current density is displayed on the item's lore.

### Trust System
*   Command: `/trust <player>`
*   This command allows you to "trust" another player. Trusted players will be immune to any harmful or movement-impairing effects from your Sparks (e.g., they won't be pulled by Breeze Spark or damaged by your Dragon Fireball). Running the command again on the same player will untrust them.

### Progression System
*   Command: `/prog 1 <start|end>`
*   This is an admin command to control the server's progression. When Progression 1 is active:
    *   Enchantments are limited to: Protection I, Sharpness II, and Power I. Players cannot create higher-level enchantments at an enchanting table or on an anvil.
    *   Players cannot have more than 24 Cobwebs or 24 Golden Apples in their inventory. Excess items will be automatically removed.

---

## UI / Display
When a player holds a Spark in their main hand or off-hand, its status will be displayed on their action bar.
*   The format is: `① Spark Name [Cooldown] ② Spark Name [Cooldown]`
*   The `①` and `②` characters are placeholders. **A custom resource pack is required** to replace these characters with the proper Spark icons. The plugin will function perfectly without the pack, but the icons will not be visible.

---

## Commands and Permissions
*   `/trust <player>` - No permission required.
*   `/prog 1 <start|end>` - Requires permission: `sparksmp.prog`
*   `/macereset` - Requires permission: `sparksmp.macereset`. This command makes the Mace craftable again if it has been destroyed.

---

## Crafting Recipes
All Sparks and the Mace have custom crafting recipes which can be fully configured in the `config.yml` file under the `recipes` section.

To change a recipe, find the item you want to edit (e.g., `dune-spark`) and modify its `shape` and `ingredients`.
*   **shape:** A list of 3 strings representing the 3x3 crafting grid. A space ` ` represents an empty slot.
*   **ingredients:** A map where the character in the shape corresponds to a Spigot Material name.

Example:
```yaml
recipes:
  dune-spark:
    shape:
      - " S "
      - "GFG"
      - " S "
    ingredients:
      S: "SAND"
      G: "GOLD_INGOT"
      F: "FEATHER"
```
