use anchor_lang::prelude::*;

declare_id!("6j7Px9otU45PLLXpmM3W6YDAbNUUHDK7Puf8PLfBTKCq");

#[program]
pub mod basic {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
