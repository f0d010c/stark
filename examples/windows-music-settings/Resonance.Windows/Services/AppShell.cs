namespace Resonance.Services;

// Tiny service locator. For a real app, swap to Microsoft.Extensions.Hosting + DI.
public static class AppShell
{
    public static PlaybackService Playback { get; } = new();
}
