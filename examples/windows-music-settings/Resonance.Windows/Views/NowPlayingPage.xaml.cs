using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Resonance.Models;
using Resonance.Services;

namespace Resonance.Views;

public sealed partial class NowPlayingPage : Page
{
    public PlaybackService Playback => AppShell.Playback;

    public NowPlayingPage()
    {
        InitializeComponent();
        DataContext = Playback;
    }

    public IEnumerable<Track> ComputeUpNext()
    {
        var queue = AppShell.Playback.Queue;
        var current = AppShell.Playback.CurrentTrack;
        if (current is null) return queue.Take(5);
        var idx = queue.ToList().IndexOf(current);
        return queue.Skip(idx + 1).Take(5);
    }

    private void PlayPause_Click(object sender, RoutedEventArgs e) => AppShell.Playback.TogglePlay();
    private void Next_Click(object sender, RoutedEventArgs e)      => AppShell.Playback.Next();
    private void Previous_Click(object sender, RoutedEventArgs e)  => AppShell.Playback.Previous();
    private void Shuffle_Click(object sender, RoutedEventArgs e)   => AppShell.Playback.Shuffle = !AppShell.Playback.Shuffle;
    private void Repeat_Click(object sender, RoutedEventArgs e)
    {
        AppShell.Playback.Repeat = AppShell.Playback.Repeat switch
        {
            RepeatMode.Off => RepeatMode.All,
            RepeatMode.All => RepeatMode.One,
            _              => RepeatMode.Off
        };
    }
}
