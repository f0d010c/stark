using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Resonance.Models;
using Resonance.Services;
using Resonance.ViewModels;

namespace Resonance.Views;

public sealed partial class LibraryPage : Page
{
    public LibraryViewModel ViewModel { get; } = new();

    public LibraryPage() => InitializeComponent();

    private void Album_Click(object sender, RoutedEventArgs e)
    {
        if (sender is Button b && b.Tag is Album a && a.Tracks.Count > 0)
        {
            AppShell.Playback.Play(a.Tracks[0]);

            // Navigate to NowPlaying
            if (Frame is { } frame) frame.Navigate(typeof(NowPlayingPage));
        }
    }
}
